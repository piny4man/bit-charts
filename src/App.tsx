import bitrefillLogo from '@/assets/bitrefill.svg'
import PaymentTrends from '@/components/PaymentTrends'
import WalletTrends from '@/components/WalletTrends'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useBlockchainTransaction } from '@/hooks/use-blockchain-transactions'
import { Bitcoin, Percent, Wallet } from 'lucide-react'
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
          <Card className="bg-stone-900 text-neutral-200 border-stone-700 flex-1 shadow-md">
            <CardHeader>
              <h2 className="text-xl flex flex-row gap-2 items-center">
                <Wallet />
                <span>User Wallet Trends</span>
              </h2>
            </CardHeader>
            <CardContent>
              <WalletTrends transactions={transactions} />
            </CardContent>
          </Card>
          <Card className="bg-stone-900 text-neutral-200 border-stone-700 max-w-80 shadow-md">
            <CardHeader>
              <h2 className="text-xl flex flex-row gap-2 items-center">
                <Percent />
                <span>0-conf Transactions</span>
              </h2>
            </CardHeader>
            <CardContent>
              <ZeroConfStats transactions={transactions} />
            </CardContent>
          </Card>
        </section>
        <Card className="bg-stone-900 text-neutral-200 border-stone-700 flex-1 shadow-md">
          <CardHeader>
            <h2 className="text-xl flex flex-row gap-2 items-center">
              <Bitcoin />
              <span>Payment Trends</span>
            </h2>
          </CardHeader>
          <CardContent>
            <PaymentTrends transactions={transactions} />
          </CardContent>
        </Card>
      </article>
    </main>
  )
}

export default App
