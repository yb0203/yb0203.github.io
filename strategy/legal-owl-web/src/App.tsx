import { MasterNav } from './components/MasterNav';
import { HeroHeader } from './components/HeroHeader';
import { MadisonMasterPitch } from './components/MadisonMasterPitch';
import { StrategyLayersOverview } from './components/StrategyLayersOverview';
import { Layer1MarketIntel } from './components/Layer1MarketIntel';
import { Layer2ProblemSpace } from './components/Layer2ProblemSpace';
import { Layer3SolutionSpace } from './components/Layer3SolutionSpace';
import { SolutionCards } from './components/SolutionCards';
import { Layer4StakeholderMap } from './components/Layer4StakeholderMap';
import { ObjectionAccordion } from './components/ObjectionAccordion';
import { Layer5BusinessLifecycle } from './components/Layer5BusinessLifecycle';
import { Layer6ProductLifecycle } from './components/Layer6ProductLifecycle';
import { PodRealignment } from './components/PodRealignment';
import { MasterUseCaseMatrix } from './components/MasterUseCaseMatrix';

export function App() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#121b18] font-sans antialiased selection:bg-[#c59e5f]/20">
      <MasterNav />
      <HeroHeader />

      <main className="max-w-6xl mx-auto px-4 sm:px-8 space-y-4">
        <MadisonMasterPitch />
        <StrategyLayersOverview />
        <Layer1MarketIntel />
        <Layer2ProblemSpace />
        <Layer3SolutionSpace />
        <SolutionCards />
        <Layer4StakeholderMap />
        <ObjectionAccordion />
        <Layer5BusinessLifecycle />
        <Layer6ProductLifecycle />
        <PodRealignment />
        <MasterUseCaseMatrix />
      </main>

      <footer className="bg-[#121b18] text-white/50 py-12 px-6 sm:px-16 border-t border-white/10 text-xs mt-16">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-bold text-white mb-1">Lyzr BFSI — US Banking Strategy & Legal Operations</div>
            <div>Exhaustively grounded in the 6 strategy layers of <code className="text-xs text-[#c59e5f]">/strategy</code> & <code className="text-xs text-[#c59e5f]">understand_banking.md</code>.</div>
          </div>
          <div className="text-right text-white/40">
            <div>Confidential · Internal Strategy Reference</div>
            <div>Synced with yb0203/lyzr-bfsi-prep</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
