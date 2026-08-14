const ACCESS_KEY = '70feaeb7-229a-4d75-bf84-4f0352c6babc'

/** 会社サイトと LP で共用する Web3Forms への送信口。新しい鍵は発行しない。 */
export async function submitToWeb3Forms(formData: FormData): Promise<boolean> {
  formData.append('access_key', ACCESS_KEY)

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData,
  })
  const json = (await res.json()) as { success: boolean }
  return json.success
}
