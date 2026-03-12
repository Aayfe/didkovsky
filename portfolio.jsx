import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInAnonymously, 
  signInWithEmailAndPassword, 
  onAuthStateChanged,
  signOut 
} from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  setDoc, 
  onSnapshot 
} from 'firebase/firestore';
import { 
  Mail, Linkedin, Github, ChevronRight, 
  Edit3, LogIn, LogOut, Save, X, Lock, User, Key, AlertCircle, ArrowDown
} from 'lucide-react';

// --- FIREBASE KONFIGURACE (TVOJE DATA) ---
const firebaseConfig = {
  apiKey: "AIzaSyCCbu53Y0jLFju-18Sf6MoQyxPsthWgcBk",
  authDomain: "didkovsky-7096d.firebaseapp.com",
  projectId: "didkovsky-7096d",
  storageBucket: "didkovsky-7096d.firebasestorage.app",
  messagingSenderId: "550558789882",
  appId: "1:550558789882:web:db9b5f031e6fb9abee5943",
  measurementId: "G-PYYVNG1SQ2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = "didkovsky-7096d"; // Používáme tvé Project ID

const App = () => {
  // --- STAVY ---
  const [scrolled, setScrolled] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [siteData, setSiteData] = useState({
    hero: {
      title: "Jakub Didkovský",
      subtitle: "DEVELOPER & DESIGNER",
      description: "Vytvářím čistá, funkční a estetická digitální řešení se zaměřením na moderní technologie a uživatelský zážitek."
    },
    about: {
      title: "O MNĚ",
      text: "Ahoj, jsem Jakub. Baví mě technologie a vytváření věcí, které dávají smysl. Moje práce je založena na jednoduchosti a funkčnosti."
    },
    contact: {
      email: "jakub@didkovsky.cz",
      linkedin: "Jakub Didkovský",
      github: "jakubdidkovsky"
    }
  });

  // --- AUTENTIZACE ---
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (!u) {
        // Pokud nikdo není přihlášen, zkusíme anonymní login pro čtení
        try {
          await signInAnonymously(auth);
        } catch (e) {
          console.error("Anonymous auth failed", e);
        }
      }
      
      // Admin je ten, kdo není anonymní (přihlásil se emailem)
      setIsEditMode(u && !u.isAnonymous);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // --- SYNCHRONIZACE S FIRESTORE ---
  useEffect(() => {
    if (!user) return;

    // Cesta k dokumentu: artifacts/{appId}/public/data/content/main
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'content', 'main');
    
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data) setSiteData(data);
      } else {
        // Pokud v DB nic není, nahrajeme tam výchozí data
        if (!user.isAnonymous) {
          setDoc(docRef, siteData);
        }
      }
    }, (err) => {
      console.error("Firestore error:", err);
    });

    return () => unsubscribe();
  }, [user]);

  // --- UKLÁDÁNÍ ---
  const saveToCloud = async (newData) => {
    if (!user || user.isAnonymous) return;
    const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'content', 'main');
    try {
      await setDoc(docRef, newData);
    } catch (err) {
      console.error("Save failed:", err);
    }
  };

  const handleUpdate = (section, field, value) => {
    const updated = { ...siteData, [section]: { ...siteData[section], [field]: value } };
    setSiteData(updated);
    saveToCloud(updated);
  };

  // --- LOGIN / LOGOUT ---
  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setShowLogin(false);
    } catch (err) {
      setLoginError("Špatné údaje. Ujisti se, že jsi uživatele vytvořil ve Firebase konzoli.");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    window.location.reload(); // Restart pro čistý stav
  };

  // --- UI ---
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const Editable = ({ value, onSave, className, isArea = false, center = false }) => {
    const val = typeof value === 'string' ? value : '';
    if (!isEditMode) return <div className={className}>{val}</div>;
    return isArea ? (
      <textarea 
        className={`${className} w-full bg-zinc-900 border border-zinc-700 rounded-xl p-3 outline-none focus:border-white transition-all text-inherit resize-none ${center ? 'text-center' : ''}`}
        value={val}
        onChange={(e) => onSave(e.target.value)}
        rows={4}
      />
    ) : (
      <input 
        className={`${className} w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-1 outline-none focus:border-white transition-all text-inherit ${center ? 'text-center' : ''}`}
        value={val}
        onChange={(e) => onSave(e.target.value)}
      />
    );
  };

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center text-zinc-700 font-mono text-[10px] tracking-[0.5em] uppercase">Inicializace...</div>;

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-white selection:text-black scroll-smooth">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${scrolled ? 'bg-black/95 backdrop-blur-md border-b border-zinc-900' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            JD<span className="text-zinc-500">.</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            {['home', 'about', 'contact'].map(id => (
              <button key={id} onClick={() => scrollTo(id)} className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-500 hover:text-white transition-all">
                {id === 'home' ? 'Domů' : id === 'about' ? 'O mně' : 'Kontakt'}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {isEditMode ? (
              <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest bg-red-600 text-white transition-all">
                <LogOut size={14} /> Odhlásit
              </button>
            ) : (
              <button onClick={() => setShowLogin(true)} className="flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] uppercase font-black tracking-widest text-zinc-500 hover:text-white border border-zinc-800">
                <Lock size={12} /> Admin
              </button>
            )}
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="animate-in fade-in duration-1000">
          <Editable value={siteData.hero.subtitle} onSave={(v) => handleUpdate('hero', 'subtitle', v)} className="text-zinc-600 font-bold tracking-[0.5em] uppercase text-[10px] mb-8" center />
          <Editable value={siteData.hero.title} onSave={(v) => handleUpdate('hero', 'title', v)} className="text-7xl md:text-[10rem] font-black mb-10 tracking-tighter leading-none" center />
          <div className="max-w-2xl mx-auto mb-16">
            <Editable isArea value={siteData.hero.description} onSave={(v) => handleUpdate('hero', 'description', v)} className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light" center />
          </div>
          <div className="animate-bounce mt-10 text-zinc-800 cursor-pointer" onClick={() => scrollTo('about')}><ArrowDown size={32} /></div>
        </div>
      </section>

      <section id="about" className="py-60 px-6 border-t border-zinc-900 bg-zinc-950/20 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <Editable value={siteData.about.title} onSave={(v) => handleUpdate('about', 'title', v)} className="text-4xl font-black tracking-tighter mb-16 uppercase" center />
          <Editable isArea value={siteData.about.text} onSave={(v) => handleUpdate('about', 'text', v)} className="text-zinc-300 text-xl md:text-3xl leading-relaxed font-light" center />
        </div>
      </section>

      <section id="contact" className="py-40 px-6 border-t border-zinc-900 text-center">
        <h2 className="text-6xl md:text-[12rem] font-black mb-24 tracking-tighter leading-none opacity-5">KONTAKT.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="p-12 bg-zinc-900 border border-zinc-800 rounded-[3rem] hover:border-zinc-500 transition-all group">
            <Mail className="mx-auto mb-8 text-zinc-700 group-hover:text-white transition-all" size={40} />
            <Editable value={siteData.contact.email} onSave={(v) => handleUpdate('contact', 'email', v)} className="font-bold text-zinc-200 text-xl" center />
          </div>
          <div className="p-12 bg-zinc-900 border border-zinc-800 rounded-[3rem] hover:border-zinc-500 transition-all group">
            <Linkedin className="mx-auto mb-8 text-zinc-700 group-hover:text-white transition-all" size={40} />
            <Editable value={siteData.contact.linkedin} onSave={(v) => handleUpdate('contact', 'linkedin', v)} className="font-bold text-zinc-200 text-xl" center />
          </div>
        </div>
      </section>

      {showLogin && (
        <div className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-6 backdrop-blur-3xl">
          <div className="bg-zinc-900 border border-zinc-800 p-10 md:p-14 rounded-[4rem] w-full max-w-sm relative text-center shadow-2xl animate-in zoom-in duration-300">
            <button onClick={() => setShowLogin(false)} className="absolute top-10 right-10 text-zinc-600 hover:text-white transition-colors"><X size={24} /></button>
            <div className="w-24 h-24 bg-white/5 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 text-white shadow-inner"><Lock size={44} /></div>
            <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase">Admin Panel</h3>
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-black border border-zinc-800 rounded-2xl py-4 px-6 outline-none focus:border-white transition-all text-sm" required />
              <input type="password" placeholder="Heslo" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-black border border-zinc-800 rounded-2xl py-4 px-6 outline-none focus:border-white transition-all text-sm" required />
              {loginError && <p className="text-red-500 text-[10px] font-bold uppercase tracking-wider">{loginError}</p>}
              <button type="submit" className="w-full py-5 bg-white text-black font-black rounded-2xl hover:scale-105 transition-all uppercase tracking-widest text-[10px]">Vstoupit</button>
            </form>
          </div>
        </div>
      )}

      {isEditMode && (
        <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[100] bg-white text-black px-12 py-5 rounded-full font-black shadow-2xl flex items-center gap-10 animate-in slide-in-from-bottom-12">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>CMS AKTIVNÍ</div>
          <button onClick={() => setIsEditMode(false)} className="hover:opacity-40 transition-opacity uppercase text-[10px] tracking-widest border-l border-zinc-200 pl-8 font-mono">SAVE</button>
        </div>
      )}

      <footer className="py-24 px-6 border-t border-zinc-900 text-center text-zinc-800 text-[10px] uppercase tracking-[0.5em] font-black">
        Jakub Didkovský © {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default App;
