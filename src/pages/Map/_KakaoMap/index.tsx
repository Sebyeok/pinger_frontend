import { useEffect, useMemo, useRef, useState } from "react";
import { CustomOverlayMap, Map, MarkerClusterer, useKakaoLoader } from "react-kakao-maps-sdk";

import { SKakaoMap as S } from "./styles";
import { ICenter } from "./types";

import { babyData, emergencyData, mapData } from "@/assets/data/mapData";
import Svg from "@/components/Svg";
import { tw } from "@/utils/tw";

const space9Location = { lat: 35.89268, lng: 128.61047624710724 };

export default function KakaoMap({ status }: { status: number }) {
  const data = useMemo(() => (status === 0 ? mapData : status === 1 ? babyData : emergencyData), [status]);
  const [loading, error] = useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAO_APP_KEY, // APPKEY
    libraries: ["clusterer"],
  });
  const clusterer = useRef<kakao.maps.MarkerClusterer>(null);
  const [center, setCenter] = useState<ICenter>({ lat: 35.89268, lng: 128.61047624710724 });
  const mapRef = useRef<kakao.maps.Map>(null);
  const [clickedId, setClickedId] = useState<string>("");

  function clusterclick(target: kakao.maps.MarkerClusterer, cluster: kakao.maps.Cluster) {
    const map = mapRef.current;
    if (map) {
      const level = map.getLevel() - 1;
      const clusterCenter = cluster.getCenter();
      const clusterLat = clusterCenter.getLat();
      const clusterLng = clusterCenter.getLng();

      map.setLevel(level);

      setCenter({ lat: clusterLat, lng: clusterLng });
    }
  }
  useEffect(() => {
    if (status === 1) {
      const map = mapRef.current;

      if (map) {
        map.setLevel(9);
      }
    } else if (status === 2) {
      const map = mapRef.current;

      if (map) {
        map.setLevel(8);
      }
    } else {
      const map = mapRef.current;

      if (map) {
        map.setLevel(5);
      }
    }
  }, [status]);

  return (
    <div className={tw("h-full w-full")}>
      {loading || (
        <Map ref={mapRef} center={center} level={5} isPanto disableDoubleClickZoom className="h-full w-full">
          <MarkerClusterer
            ref={clusterer}
            averageCenter={true}
            minLevel={9}
            onClusterclick={clusterclick}
            calculator={[0]}
            disableClickZoom
            styles={[S.MarkerClusterStyle]}
          >
            {data.array.map((item) => (
              <CustomOverlayMap
                key={item.id}
                position={{ lat: Number(item.lat), lng: Number(item.lon) }}
                yAnchor={1}
                clickable={false}
                zIndex={clickedId === item.id ? 13 : 11}
              >
                <div
                  className={tw(
                    "flex h-[35rem] w-[35rem] items-center justify-center rounded-full border-[1rem] border-solid border-white bg-[#3AC197] shadow-resultBox"
                  )}
                >
                  <div className={tw("absolute h-[3rem] w-[14rem] rounded-full bg-white")} />
                  <div className={tw("absolute h-[3rem] w-[14rem] rotate-90 rounded-full bg-white")} />
                </div>
              </CustomOverlayMap>
            ))}
            {data.dupArray.map((item) => (
              <CustomOverlayMap
                key={item[0].lat + "-" + item[0].lon}
                position={{ lat: item[0].lat, lng: item[0].lon }}
                yAnchor={0.97}
                zIndex={12}
              >
                <div
                  className={tw(
                    "flex h-[35rem] w-[35rem] items-center justify-center rounded-full border-[1rem] border-solid border-white bg-[#3AC197] shadow-resultBox"
                  )}
                >
                  <div className={tw("absolute h-[3rem] w-[14rem] rounded-full bg-white")} />
                  <div className={tw("absolute h-[3rem] w-[14rem] rotate-90 rounded-full bg-white")} />
                </div>
              </CustomOverlayMap>
            ))}
          </MarkerClusterer>
          <CustomOverlayMap position={space9Location} yAnchor={0.27}>
            <div
              className={tw("flex h-[35rem] w-[35rem] items-center justify-center rounded-full bg-ktas2 bg-opacity-40")}
            >
              <div
                className={tw("h-[20rem] w-[20rem] rounded-full border-[1.5rem] border-solid border-white bg-ktas2")}
              ></div>
            </div>
          </CustomOverlayMap>
        </Map>
      )}
    </div>
  );
}
