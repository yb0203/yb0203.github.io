import { Header } from './components/features/Header';
import { Hero } from './components/features/Hero';
import { ExecutiveSummary } from './components/features/ExecutiveSummary';
import { ArchitectureHarness } from './components/features/ArchitectureHarness';
import { Differentiators } from './components/features/Differentiators';
import { TaxonomyMatrix } from './components/features/TaxonomyMatrix';
import { SalesEngine } from './components/features/SalesEngine';
import { ExecutionRoadmap } from './components/features/ExecutionRoadmap';
import { StrategicAlignment } from './components/features/StrategicAlignment';
import { Footer } from './components/features/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#080c14] text-[#f8fafc] font-sans antialiased selection:bg-[#10b981]/30 selection:text-emerald-200">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-12">
        <Hero />
        <ExecutiveSummary />
        <ArchitectureHarness />
        <Differentiators />
        <TaxonomyMatrix />
        <SalesEngine />
        <ExecutionRoadmap />
        <StrategicAlignment />
      </main>

      <Footer />
    </div>
  );
}

export default App;
