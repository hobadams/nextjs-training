export const dynamic = 'force-dynamic';

const getContent = async (): Promise<string> => {
  console.log('getting content');
  await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec
  console.log('finished getting content');

  // throw new Error('Failed to fetch content');

  return 'content';
}

export default async function Page() {
  const content = await getContent()

  return <h1>{content}</h1>

}