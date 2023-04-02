import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Portfolio | Jakub Cvacho',
    description: 'Hi, i am Frontend developer and photographer',
  };

const HomePage = () => {
    return (
        <>
            <div>{'Homepage'}</div>
        </>
    ) 
}

export default HomePage