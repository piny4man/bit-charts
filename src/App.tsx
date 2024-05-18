import WalletTrends from '@/components/WalletTrends'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useBlockchainTransaction } from '@/hooks/use-blockchain-transactions'
import PaymentTrends from '@/components/PaymentTrends'
import bitrefillLogo from '@/assets/bitrefill.svg'

function App() {
  const { transactions } = useBlockchainTransaction()
  return (
    <main className="w-dvw min-h-dvh p-10 bg-zinc-900 text-neutral-200">
      <header className="flex flex-row justify-start items-center gap-5 mb-10">
        <img src={bitrefillLogo} className="w-40" alt="Bitrefill logo" />
        <h1 className="text-2xl">Bit charts</h1>
      </header>
      <article className="max-w-5xl mx-auto">
        <section className="flex flex-row gap-5">
          <Card className="bg-zinc-800 text-neutral-200 border-zinc-900 flex-1">
            <CardHeader>
              <h2 className="text-xl">User wallets</h2>
            </CardHeader>
            <CardContent>
              <WalletTrends transactions={transactions} />
            </CardContent>
          </Card>
          <Card className="bg-zinc-800 text-neutral-200 border-zinc-900 flex-1">
            <CardHeader>
              <h2 className="text-xl">Payment Trends</h2>
            </CardHeader>
            <CardContent>
              <PaymentTrends transactions={transactions} />
            </CardContent>
          </Card>
        </section>
      </article>
    </main>
  )
}

export default App
