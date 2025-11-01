import { useEffect } from 'react'
import { registerSW } from 'virtual:pwa-register'

export function useRegisterSW() {
  useEffect(() => {
    const updateSW = registerSW({
      onNeedRefresh() {},
      onOfflineReady() {}
    })
    return () => { updateSW && updateSW() }
  }, [])
}
