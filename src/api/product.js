import supabase from ".";

export async function getAllProducts() {
    let { data: product } = await supabase
        .from('product')
        .select('*');
    return product;
}

export async function getProductsByIds(ids) {
    let { data: product } = await supabase
        .from('product')
        .select('*')
        .in("id", ids);
    return product;
}