import { useQuery } from "@tanstack/react-query";
import { fetchFirebaseData } from "../../../../connector/functions";

const CACHE_MS = 1000 * 60 * 60 * 24;

const cacheOptions = {
    staleTime: CACHE_MS,
    gcTime: CACHE_MS,
    refetchOnWindowFocus: false,
};

const toList = (value: unknown) => {
    if (!value) return undefined;
    return Array.isArray(value) ? value : Object.values(value as Record<string, string>);
};

const useFirebaseDataHooks = (l: string) => {
    const profile = useQuery({
        queryKey: ['profile'],
        queryFn: () => fetchFirebaseData(`site/shared/profile`),
        ...cacheOptions,
    });
    const hero = useQuery({
        queryKey: ['hero', l],
        queryFn: () => fetchFirebaseData(`site/${l}/hero`),
        ...cacheOptions,
    });
    const social = useQuery({
        queryKey: ['socialLinks'],
        queryFn: () => fetchFirebaseData(`site/shared/social`),
        ...cacheOptions,
    });

    return {
        nameData: { ...profile, data: profile.data?.name },
        fullNameData: { ...profile, data: profile.data?.fullName },
        textsData: { ...hero, data: toList(hero.data?.professions) },
        descriptionData: { ...hero, data: hero.data?.description },
        greetingData: { ...hero, data: hero.data?.greeting },
        contactButtonData: { ...hero, data: hero.data?.contactButton },
        projectsButtonData: { ...hero, data: hero.data?.projectsButton },
        socialLinksData: social,
    };
}

export default useFirebaseDataHooks;
