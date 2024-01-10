import { trpc } from './App';

export default function test() {
  const userQuery = trpc.example.useQuery();

  return (
    <div>
        <p>{userQuery.data}</p>
    </div>
  )
}
