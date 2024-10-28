import styled from "styled-components";

import { palette } from "@/themes/styles";

export const SKakaoMap = {
  OverlayTextBox: styled.div<{ $visible: boolean; $open: boolean }>`
    visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
    position: absolute;
    top: -27px;
    display: flex;
    align-items: center;
    background-color: white;
    color: ${({ $open }) => ($open ? "#3AC197" : palette.gray[500])};
    border: 1.6px solid ${({ $open }) => ($open ? "#3AC197" : palette.gray[100])};
    border-radius: 25px;
    padding: 2px 8px;
    gap: 5px;
    font-size: 14px;
    font-weight: 600;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2));
  `,

  MarkerWrapper: styled.div`
    position: relative;
    display: flex;
    justify-content: center;
  `,

  MarkerCircle: styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 5px;
    width: 18px;
    height: 18px;
    border-radius: 18px;
    background-color: white;
    font-size: 12px;
    font-weight: 600;
    color: ${palette.ktas2};
  `,

  MyMarker: styled.img`
    width: 40px;
    height: 40px;
  `,

  MarkerClusterStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "50px",
    background: "rgba(44, 64, 135, .8)",
    borderRadius: "50px",
    color: "white",
    textAlign: "center",
    fontWeight: "600",
  },
};
