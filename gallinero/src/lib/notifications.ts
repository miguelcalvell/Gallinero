import { toast } from 'sonner'

export const notify = {
  success: (msg: string) => toast.success(msg),
  info: (msg: string) => toast(msg),
  error: (msg: string) => toast.error(msg),
}
