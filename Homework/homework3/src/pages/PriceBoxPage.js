import PriceBox from "../components/PriceBox"

const items = [
    {
      id: '123',
      label: 'Free',
      price: '0',
      unsers: '10 users included',
      gb: '2 GB of storage',
      email: 'Email support',
      help: 'Help center access',
      buttontext: 'Sign up for free',
    },
    {
      id: '456',
      label: 'Pro',
      price: '15',
      unsers: '20 users included',
      gb: '10 GB of storage',
      email: 'Priority email support',
      help: 'Help center access',
      buttontext: 'Get started',
    },
    {
      id: '679',
      label: 'Enterprise',
      price: '29',
      unsers: '30 users included',
      gb: '15 GB of storage',
      email: 'Phone and email support',
      help: 'Help center access',
      buttontext: 'Contact us',
    },
  ]


export default function PriceBoxPage() {
    return <PriceBox items={items}/>
}
 