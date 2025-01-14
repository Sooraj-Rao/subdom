interface ProfilePageProps {
  params: { username: string };
}

export default function ProfilePage({ params }: ProfilePageProps) {
  const { username } = params;

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>This is your profile page.</p>
    </div>
  );
}
