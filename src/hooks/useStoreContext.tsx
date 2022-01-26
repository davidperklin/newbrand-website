import { IStoreContext, StoreContext } from '@context/store-context'
import { useContext } from 'react'

const useStoreContext = () => {
  const context = useContext<IStoreContext>(StoreContext)

  if (context === undefined) {
    throw new Error(
      `'useStoreContext' hook must be used within a 'CustomerProvider' component`
    )
  }

  return context
}
export default useStoreContext
