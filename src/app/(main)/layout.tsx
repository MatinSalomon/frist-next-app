import { FC, PropsWithChildren } from "react";
import Menu from "@/src/components/menu/Menu";
import ExploreTrending from "@/src/components/explore/ExploreTrending";
import ExploreApi from "@/src/services/explore/explore.service";
import ExploreUser from "@/src/components/explore/ExploreUsers";
import Link from "next/link";

const LINKS = [
                {title: "Inicio", href: "/"},
                {title: "Explorar", href: "/explore"},
                {title: "Perfil", href: "mi-perfil"}
            ]

const UsersLayout: FC<PropsWithChildren> = async ({children}) => {
    const hashesPromise = ExploreApi.getTrendingHastags(0, 3)
    const usersPromise = ExploreApi.getFollowRecommendations(0, 5)

  const [hashes, users] = await Promise.all([hashesPromise, usersPromise])


    return(
        <>
            <div className="grid grid-cols-12 w-full h-full gap-4 px-4">
                <div className="col-span-2">
                    <Menu links={LINKS}/>
                </div>
                <main className="col-span-6">{children}</main>
                <div className="col-span-4">
                    <div className="mb-4">
                        <ExploreTrending hashes={hashes.content}/>
                    </div>
                    <div className="mb-4">
                        <ExploreUser users={users.content}/>
                    </div>
                    <Link href="/faq" >
                        <div className="link-primary">
                            Preguntas Frecuentes
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default UsersLayout