import WalletTrends from './components/WalletTrends'
import { Card, CardContent, CardHeader } from './components/ui/card'
import { useBlockchainTransaction } from './hooks/use-blockchain-transactions'

function App() {
  const { transactions } = useBlockchainTransaction()
  return (
    <main>
      <header>Bit charts</header>
      <article>
        <Card>
          <CardHeader>User wallets</CardHeader>
          <CardContent>
            <WalletTrends transactions={transactions} />
          </CardContent>
        </Card>
      </article>
    </main>
  )
}

export default App
