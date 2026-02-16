import { Cards } from 'nextra/components'

export function BoxCard({ title, description, href, icon }) {
  return (
    <Cards.Card title={title}  className='relative [&>span]:p-0 [&>span]:text-sm
     flex flex-col gap-4 h-30 items-center justify-center! col-span-1 ' href={href}>
     <div className='[&>svg]:w-10 [&>svg]:h-10 '>
       {icon}
     </div>
   
     
    </Cards.Card>
  )
}