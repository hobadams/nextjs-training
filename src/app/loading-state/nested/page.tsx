const getContent = async (): Promise<string> => {
  console.log(1);
  await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec
  console.log(2);

  return 'content';
}

export default async function Page() {

  const content = await getContent()

  return <h1>Nested - {content}</h1>

}