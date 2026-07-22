export const getchFirebaseData = async (path: string) => {
    const data = await fetch(`https://studio-6126571740-3d5b4-default-rtdb.firebaseio.com/${path}.json`);
    return data.json();
}