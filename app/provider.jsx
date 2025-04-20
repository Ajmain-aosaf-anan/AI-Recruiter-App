"use client"
import { UserDetailContext } from "@/context/UserDetailContext";
import { supabase } from "@/services/supabaseClient"
import React, { useEffect, useState } from "react"

function Provider({ children }) {

    const [user, setUser] = useState();
    useEffect(() => {
        CreateNewUser();
    }, [])

    const CreateNewUser = () => {
        supabase.auth.getUser().then(async ({ data: { user }}) => {
            if (!user) return;

            const fullName = user?.user_metadata?.full_name || "";
            const nameParts = fullName.trim().split(" ");
            const firstName = nameParts[0];
            const lastName = nameParts.slice(1).join(" ") || "";

            let { data: Users, error} = await supabase
                .from('Users')
                .select('*')
                .eq('email', user.email);

            console.log("Existing user check:", Users);

            if (!Users || Users.length == 0) {
                const { data, error: insertError } = await supabase.from("Users")
                .insert([
                    {
                        name: fullName,
                        first_name: firstName,
                        last_name: lastName,
                        email: user.email,
                        picture: user.user_metadata?.picture
                    }
                ])
                console.log("User inserted:",data);
                setUser(data);
                return;
            }

            setUser(Users[0]);
        })
    }
    return (
        <UserDetailContext.Provider value={{ user, setUser }}>
        <div> {children} </div>
        </UserDetailContext.Provider>
    )

}

export default Provider;

export const useUser= () => {
    const context = useContext(UserDetailContext);
    return context;
}