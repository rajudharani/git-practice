import { auth } from "../../auth";
import clientPromise from "../../lib/mongodb";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await auth();
  if (!session?.user || session.user.role !== "admin") {
    redirect("/");
  }

  const client = await clientPromise;
  const db = client.db();
  const users = await db
    .collection("users")
    .find({}, { projection: { password: 0 } })
    .limit(50)
    .toArray();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <p className="mb-4 opacity-80">Signed in as {session.user.email}</p>
      <div className="bg-white rounded-xl shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Verified</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u: any) => (
              <tr key={u._id.toString()} className="border-b last:border-0">
                <td className="p-3">{u.name || "—"}</td>
                <td className="p-3">{u.email}</td>
                <td className="p-3">{u.role || "user"}</td>
                <td className="p-3">{u.emailVerified ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


