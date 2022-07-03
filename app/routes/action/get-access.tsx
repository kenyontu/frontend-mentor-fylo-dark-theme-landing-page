import { json } from '@remix-run/node'
import type { ActionFunction } from '@remix-run/node'

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()

  const email = formData.get('email') as string

  if (email && /^.+@.+\..+$/.test(email)) {
    return json({ message: 'An activation email was sent to you.' })
  }

  return json({ message: 'Invalid email' }, { status: 400 })
}
