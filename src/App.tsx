import WalletTrends from '@/components/WalletTrends'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useBlockchainTransaction } from '@/hooks/use-blockchain-transactions'
import PaymentTrends from '@/components/PaymentTrends'

function App() {
  const { transactions } = useBlockchainTransaction()
  return (
    <main className="w-dvw min-h-dvh p-10">
      <header>Bit charts</header>
      <article>
        <section className="flex flex-row gap-5">
          <Card className="flex-1">
            <CardHeader>User wallets</CardHeader>
            <CardContent>
              <WalletTrends transactions={transactions} />
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardHeader>Payment Trends</CardHeader>
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
