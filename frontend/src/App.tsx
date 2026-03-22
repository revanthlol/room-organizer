import React, { useState } from 'react';
import { Sparkles, ArrowRight, ChevronLeft, ImagePlus, CheckCircle2, AlertCircle, Palette, Grid, Wand2, Download, Share2 } from 'lucide-react';

export default function App() {
  const [screen, setScreen] = useState<'onboarding' | 'upload' | 'setup' | 'results'>('onboarding');

  return (
    <div className="bg-warm-sand min-h-screen font-sans flex items-center justify-center p-4">
      <div className="bg-soft-blush relative overflow-hidden max-w-[400px] w-full min-h-[820px] rounded-[40px] shadow-soft flex flex-col isolation-auto">
        
        {/* Organic Background Blobs */}
        <div className="absolute top-[-5%] right-[-15%] w-[250px] h-[250px] bg-white opacity-40 organic-blob pointer-events-none -z-10 blur-xl transition-all duration-700"></div>
        <div className="absolute top-[30%] left-[-20%] w-[300px] h-[300px] bg-primary-rose opacity-10 organic-blob pointer-events-none -z-10 blur-2xl transition-all duration-700"></div>
        
        {screen === 'onboarding' && <OnboardingScreen onNext={() => setScreen('upload')} />}
        {screen === 'upload' && <UploadScreen onBack={() => setScreen('onboarding')} onNext={() => setScreen('setup')} />}
        {screen === 'setup' && <RoomSetupScreen onBack={() => setScreen('upload')} onNext={() => setScreen('results')} />}
        {screen === 'results' && <ResultsScreen onBack={() => setScreen('setup')} />}

      </div>
    </div>
  );
}

function OnboardingScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col h-full inset-0 z-20">
      <div className="flex justify-between items-center p-6 pt-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
        <div className="flex items-center gap-2">
          <div className="bg-deep-maroon p-[6px] rounded-full shadow-sm">
             <Sparkles size={14} className="text-soft-blush" />
          </div>
          <span className="font-display font-bold text-deep-maroon text-lg tracking-tight">RoomAI</span>
        </div>
        <button className="text-deep-maroon/60 font-medium text-sm hover:text-deep-maroon transition-colors py-2 px-3">Skip</button>
      </div>

      <div className="flex-1 w-full flex items-center justify-center px-6 pb-2 z-10 relative mt-2 animate-in zoom-in-95 duration-700">
        <div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden shadow-soft border-4 border-white/40">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" 
            alt="Beautiful interior design" 
            className="object-cover w-full h-full scale-105 hover:scale-110 transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-maroon/30 to-transparent mix-blend-multiply"></div>
          <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-rose"></span>
            <span className="text-[11px] font-bold text-deep-maroon uppercase tracking-wider">Organic Velvet</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[40px] p-8 pt-10 z-10 flex flex-col gap-6 shadow-[0_-15px_40px_rgba(206,107,127,0.08)] mt-auto mx-2 mb-2 relative animate-in slide-in-from-bottom-8 duration-500">
        <div className="flex flex-col gap-3">
          <h1 className="font-display text-[2.2rem] leading-[1.1] font-bold text-deep-maroon tracking-tight">
            Design your<br/>dream space.
          </h1>
          <p className="text-deep-maroon/60 text-[15px] leading-relaxed font-medium pr-4">
            Transform any room with AI-powered interior design. Discover your perfect aesthetic in seconds.
          </p>
        </div>

        <button 
          onClick={onNext}
          className="w-full bg-primary-rose hover:bg-opacity-90 hover:shadow-[0_12px_28px_rgba(206,107,127,0.4)] transition-all text-white font-semibold py-[18px] rounded-full shadow-rose mt-2 flex items-center justify-center gap-2 text-[17px] group cursor-pointer"
        >
          Get Started
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
        
        <div className="flex justify-center items-center gap-2 mt-2">
          <span className="w-8 h-[6px] rounded-full bg-primary-rose transition-all"></span>
          <span className="w-[6px] h-[6px] rounded-full bg-warm-sand transition-all"></span>
          <span className="w-[6px] h-[6px] rounded-full bg-warm-sand transition-all"></span>
        </div>
      </div>
    </div>
  );
}

function UploadScreen({ onBack, onNext }: { onBack: () => void, onNext: () => void }) {
  const [uploaded, setUploaded] = useState(false);

  return (
    <div className="animate-in slide-in-from-right-8 duration-500 flex flex-col h-full absolute inset-0 z-20 bg-soft-blush">
      <div className="flex items-center justify-between p-6 pt-10">
        <button onClick={onBack} className="bg-white/60 backdrop-blur p-3 rounded-full shadow-sm hover:bg-white transition-colors text-deep-maroon cursor-pointer">
          <ChevronLeft size={20} />
        </button>
        <span className="font-display font-bold text-deep-maroon text-lg">Upload Room</span>
        <div className="w-11"></div>
      </div>

      <div className="flex-1 flex flex-col px-6">
        <div className="text-center mt-2 mb-8">
          <h2 className="text-2xl font-bold font-display text-deep-maroon mb-2">Show us your space</h2>
          <p className="text-deep-maroon/60 font-medium text-sm px-4">Upload a clear photo of the room you want to redesign.</p>
        </div>

        <div className="relative group cursor-pointer" onClick={() => setUploaded(!uploaded)}>
          <div className="absolute inset-0 bg-primary-rose/5 rounded-[32px] organic-blob scale-105 group-hover:scale-110 transition-transform duration-500 opacity-50"></div>
          
          {!uploaded ? (
            <div className="border-2 border-dashed border-primary-rose/30 bg-white/50 backdrop-blur-md rounded-[32px] p-8 flex flex-col items-center justify-center gap-4 hover:border-primary-rose/50 hover:bg-white/80 transition-all duration-300 aspect-square relative z-10">
              <div className="bg-soft-blush p-5 rounded-full text-primary-rose shadow-sm group-hover:scale-110 transition-transform duration-300">
                <ImagePlus size={32} strokeWidth={1.5} />
              </div>
              <div className="text-center">
                <span className="block font-semibold text-deep-maroon text-lg">Tap to upload</span>
                <span className="block text-deep-maroon/50 text-xs mt-1 font-medium">PNG, JPG up to 10MB</span>
              </div>
            </div>
          ) : (
            <div className="border-4 border-white bg-white/50 backdrop-blur-md rounded-[32px] flex flex-col items-center justify-center hover:opacity-90 transition-all duration-300 aspect-square relative z-10 overflow-hidden shadow-soft">
              <img src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Uploaded room" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-maroon/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span className="text-[12px] font-bold text-deep-maroon tracking-wide">Image Ready</span>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-3xl p-6 mt-10 shadow-soft">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle size={18} className="text-primary-rose" />
            <h3 className="font-bold text-deep-maroon text-sm uppercase tracking-wider">Photo Guidelines</h3>
          </div>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 size={16} className="text-primary-rose mt-[2px] shrink-0" />
              <span className="text-xs font-medium text-deep-maroon/70 leading-relaxed">Ensure the room is well lit with natural light if possible.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={16} className="text-primary-rose mt-[2px] shrink-0" />
              <span className="text-xs font-medium text-deep-maroon/70 leading-relaxed">Capture the widest angle to show walls and floor structure.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="p-6 pb-8 bg-gradient-to-t from-soft-blush via-soft-blush to-transparent pt-12 mt-auto">
        <button 
          disabled={!uploaded}
          onClick={onNext}
          className={`w-full py-4 rounded-full shadow-sm text-[16px] font-bold transition-all ${uploaded ? 'bg-primary-rose text-white shadow-rose hover:bg-opacity-90 hover:shadow-[0_12px_28px_rgba(206,107,127,0.4)] cursor-pointer' : 'bg-white opacity-50 cursor-not-allowed text-deep-maroon/40'}`}
        >
          {uploaded ? 'Continue to Setup' : 'Analyze Room'}
        </button>
      </div>
    </div>
  );
}

function RoomSetupScreen({ onBack, onNext }: { onBack: () => void, onNext: () => void }) {
  const styles = ['Minimalist', 'Bohemian', 'Mid-Century', 'Industrial', 'Scandinavian', 'Organic Velvet'];
  const [selectedStyle, setSelectedStyle] = useState('Organic Velvet');
  const [roomType, setRoomType] = useState('Living Room');

  return (
    <div className="animate-in slide-in-from-right-8 duration-500 flex flex-col h-full absolute inset-0 z-30 bg-warm-sand">
      <div className="flex items-center justify-between p-6 pt-10">
        <button onClick={onBack} className="bg-white p-3 rounded-full shadow-sm hover:bg-soft-blush transition-colors text-deep-maroon cursor-pointer">
          <ChevronLeft size={20} />
        </button>
        <span className="font-display font-bold text-deep-maroon text-lg">Setup Room</span>
        <div className="w-11"></div>
      </div>

      <div className="flex-1 flex flex-col px-6 overflow-y-auto pb-32">
        <div className="bg-white rounded-[32px] p-6 shadow-soft mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-soft-blush p-2 rounded-full"><Grid size={18} className="text-primary-rose" /></div>
            <h3 className="font-bold text-deep-maroon">Room Type</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Living Room', 'Bedroom', 'Kitchen', 'Office'].map(type => (
              <button 
                key={type}
                onClick={() => setRoomType(type)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${roomType === type ? 'bg-deep-maroon text-white border-deep-maroon' : 'bg-transparent text-deep-maroon/70 border-deep-maroon/10 hover:border-primary-rose/30 hover:bg-soft-blush'}`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-[32px] p-6 shadow-soft">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-soft-blush p-2 rounded-full"><Palette size={18} className="text-primary-rose" /></div>
            <h3 className="font-bold text-deep-maroon">Design Style</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {styles.map(style => (
              <button 
                key={style}
                onClick={() => setSelectedStyle(style)}
                className={`px-5 py-3 rounded-full text-sm font-semibold transition-all ${selectedStyle === style ? 'bg-primary-rose text-white shadow-rose scale-105' : 'bg-warm-sand text-deep-maroon/70 hover:bg-soft-blush'}`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 pb-8 bg-gradient-to-t from-warm-sand via-warm-sand to-transparent">
        <button 
          onClick={onNext}
          className="w-full bg-deep-maroon hover:bg-primary-rose transition-colors text-white font-bold py-4 rounded-full flex items-center justify-center gap-2 text-[17px] shadow-soft cursor-pointer"
        >
          <Wand2 size={20} />
          Generate Design
        </button>
      </div>
    </div>
  );
}

function ResultsScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="animate-in slide-in-from-bottom-8 duration-700 flex flex-col h-full absolute inset-0 z-40 bg-soft-blush">
      <div className="flex items-center justify-between p-6 pt-10 absolute top-0 w-full z-50">
        <button onClick={onBack} className="bg-white/80 backdrop-blur p-3 rounded-full shadow-sm hover:bg-white transition-colors text-deep-maroon cursor-pointer">
          <ChevronLeft size={20} />
        </button>
        <div className="bg-white/80 backdrop-blur px-4 py-2 rounded-full font-bold text-deep-maroon text-sm shadow-sm">
          Result
        </div>
        <button className="bg-white/80 backdrop-blur p-3 rounded-full shadow-sm hover:bg-white transition-colors text-deep-maroon cursor-pointer">
          <Download size={20} />
        </button>
      </div>

      <div className="flex-1 w-full relative">
        <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" className="w-full h-[60%] object-cover rounded-b-[40px] shadow-soft" />
        <div className="absolute top-[60%] -mt-10 left-6 right-6 bg-white rounded-[32px] p-6 shadow-soft">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="font-display font-bold text-2xl text-deep-maroon leading-tight">Living Room</h2>
              <p className="text-primary-rose font-semibold text-sm mt-1">Organic Velvet Style</p>
            </div>
            <div className="bg-warm-sand p-2 rounded-full text-primary-rose"><Share2 size={18} /></div>
          </div>
          
          <p className="text-deep-maroon/70 text-sm leading-relaxed mb-6 font-medium">
            We introduced soft pill-shaped furnitures, warm blush accents, and deep maroon contrasts to perfectly capture the Organic Velvet aesthetic.
          </p>

          <h3 className="font-bold text-deep-maroon text-sm uppercase tracking-wider mb-2">Color Palette</h3>
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-[#ce6b7f] shadow-sm border border-black/5"></div>
            <div className="w-10 h-10 rounded-full bg-[#fae5e5] shadow-sm border border-black/5"></div>
            <div className="w-10 h-10 rounded-full bg-[#3d2327] shadow-sm border border-black/5"></div>
            <div className="w-10 h-10 rounded-full bg-[#ffffff] shadow-sm border border-black/5"></div>
            <div className="w-10 h-10 rounded-full bg-[#fbf2eb] shadow-sm border border-black/5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

