import { useSession } from "next-auth/react";

export default function ProfileCard() {
    const{ data: session } = useSession();
    if(!session) return null;

    return(
        <div className="flex flex-col items-center my-6">
            <img src={session.user?.image ?? "/default-avatar.png"} alt="avatar" className="w-24 h-24 rounded-full" />
            <h2 className="text-xl font-bold"> { session.user?.name }</h2>
            <p className="text-gray-500"> { session.user?.email } </p>
        </div>
    );
}