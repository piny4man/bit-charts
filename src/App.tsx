import bitrefillLogo from '@/assets/bitrefill.svg'
import PaymentTrends from '@/components/PaymentTrends'
import WalletTrends from '@/components/WalletTrends'
import { useBlockchainTransaction } from '@/hooks/use-blockchain-transactions'
import ZeroConfStats from './components/ZeroConfStats'

function App() {
  const { transactions } = useBlockchainTransaction()
  return (
    <main className="w-dvw max-w-full min-h-dvh p-10 bg-zinc-800 text-neutral-200 overflow-x-hidden">
      <header className="flex flex-row justify-start items-center gap-5 mb-10">
        <img src={bitrefillLogo} className="w-40" alt="Bitrefill logo" />
        <h1 className="text-2xl">Transaction stats</h1>
      </header>
      <article className="max-w-6xl mx-auto flex flex-col gap-5 items-stretch">
        <section className="flex flex-row gap-5 items-stretch">
          <WalletTrends transactions={transactions} />
          <ZeroConfStats transactions={transactions} />
        </section>
        <PaymentTrends transactions={transactions} />
      </article>
    </main>
  )
}

export default App
