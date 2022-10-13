import supabase from ".";

export async function signUp(email, password) {
    return await supabase.auth.signUp({
        email,
        password,
    })
}

export async function logIn(email, password) {
    return await supabase.auth.signInWithPassword({
        email,
        password,
    })
}
