import { ReactNode } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

type Props = {
  title: string
  icon: ReactNode
  children: ReactNode
  classNames?: string
}

const ChartCard = ({ title, icon, children, classNames }: Props) => {
  return (
    <Card className={`bg-stone-900 text-neutral-200 border-stone-700 flex-1 shadow-md ${classNames ?? ''}`}>
      <CardHeader>
        <h2 className="text-xl flex flex-row gap-2 items-center">
          {icon}
          <span>{title}</span>
        </h2>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

export default ChartCard
