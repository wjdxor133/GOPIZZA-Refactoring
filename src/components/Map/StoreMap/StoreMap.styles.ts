import styled from 'styled-components';
import { MdMyLocation } from 'react-icons/md';
import { FaPizzaSlice } from 'react-icons/fa';

export const StoreMapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;

  .wrap {
    position: absolute;
    left: 0;
    bottom: 40px;
    width: 288px;
    height: 132px;
    margin-left: -144px;
    text-align: left;
    overflow: hidden;
    font-size: 12px;
    line-height: 1.5;
  }
  .wrap * {
    padding: 0;
    margin: 0;
  }
  .wrap .info {
    width: 286px;
    height: 120px;
    border-radius: 5px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.light_gray};
    border-right: 1px solid ${({ theme }) => theme.colors.light_gray};
    overflow: hidden;
    background: ${({ theme }) => theme.colors.white};
  }
  .wrap .info:nth-child(1) {
    border: 0;
    box-shadow: 0px 1px 2px ${({ theme }) => theme.colors.darker_gray};
  }
  .info .title {
    padding: 0 5px 0 10px;
    height: 30px;
    background: ${({ theme }) => theme.colors.primary_regular};
    color: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid ${({ theme }) => theme.colors.light_gray};
    font-size: 18px;
    font-weight: bold;
  }
  .info .close {
    position: absolute;
    right: 12px;
    top: 4px;
    width: 24px;
    height: 24px;
  }
  .info .close:hover {
    opacity: 1;
    cursor: pointer;
  }
  .close:before,
  .close:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 24px;
    width: 3px;
    background-color: ${({ theme }) => theme.colors.white};
  }
  .close:before {
    transform: rotate(45deg);
  }
  .close:after {
    transform: rotate(-45deg);
  }

  .info .body {
    position: relative;
    overflow: hidden;
  }
  .info .desc {
    position: relative;
    margin: 13px;
    height: 75px;
  }
  .desc .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .desc .jibun {
    font-size: 11px;
    color: ${({ theme }) => theme.colors.darker_gray};
    margin-top: -2px;
  }
  .info .img {
    position: absolute;
    top: 6px;
    left: 5px;
    width: 73px;
    height: 71px;
    border: 1px solid ${({ theme }) => theme.colors.light_gray};
    color: ${({ theme }) => theme.colors.darker_gray};
    overflow: hidden;
  }
  .info:after {
    content: '';
    position: absolute;
    margin-left: -12px;
    left: 50%;
    bottom: 0;
    width: 22px;
    height: 12px;
    background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png');
  }
`;

export const MapWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 500px;
  padding: 24px;
  border-radius: 10px;
`;

export const MenuBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 2;
`;

export const MenuBtn = styled.div`
  font-size: 18px;
  cursor: pointer;
  padding: 8px;
  margin-left: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    transition: 0.2s ease-in-out;
  }
`;

export const CurrentLocationIcon = styled(MdMyLocation)``;

export const PizzaMarkIcon = styled(FaPizzaSlice)`
  font-size: 18px;
`;
