export interface TRouteManifest{
    path: string;
    pageName: string;
}

type TRoutesManifest = {
    [key: string]: TRouteManifest;
}

export const routeManifest: TRoutesManifest = {
    homeRoute: {
        path: "/home",
        pageName: "Home Page"
    }
}