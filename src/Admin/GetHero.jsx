import React from 'react'

export default function GetHero() {
    const [ hero, setHero] = useState([])

    useEffect(() => {
      const getHero = async () => {
        try {
          const response = await databases.listDocuments(
            "67a5d22900142d063b7c", // Replace with your Database ID
            "67a672de002469830598", // Replace with your Collection ID
            [
              Query.orderDesc('createdAt')
            ]
          );
          setHero(response.documents); // Returns an array of documents
        } catch (error) {
          console.error("Error fetching collection:", error);
        }
      }
      getHero();
    }, []);

  return (
    <div className='min-h-screen'>
        <div className='flex flex-col md:flex-row'>
            <DashSidebar />
         <div>
                    <Table hoverable className='overflow-x-scroll scrollbar'>
                        <Table.Head>
                                <Table.HeadCell>
                                    Titre
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Desc
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Image
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Status
                                </Table.HeadCell>
                        </Table.Head>
                        <Table.Body>
            {
                hero.map((hero) => (
                            <Table.Row>
                               <Table.Cell>
                                 <h1 className='line-clamp-1'>                            
                                   {hero?.hero_title}
                                 </h1>
                               </Table.Cell>
                               <Table.Cell>
                               <h1 className='line-clamp-2'>                            
                                   {hero?.hero_desc}
                                 </h1>
                               </Table.Cell>
                               <Table.Cell>
                                 <img src={hero?.logo} width={100} />
                               </Table.Cell>
                               <Table.Cell>
                                 <span className='flex gap-2'>
                                  <FaPencilAlt />
                                  <IoReceipt />
                                 </span>
                               </Table.Cell>
                            </Table.Row>
                    ))
                 }
                        </Table.Body>
                    </Table>
         </div>
        </div>
    </div>
  )
}
