/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from 'components';
import { useSelector } from 'react-redux';
import { RootState } from 'store/type';
import { useModal, useToast } from 'hooks';
import { PaymentBtn } from './PaymentButton.styles';

declare global {
  interface Window {
    IMP: any;
  }
}

interface PaymentButtonProps {
  total: number;
}

const PaymentButton = ({ total }: PaymentButtonProps) => {
  const user = useSelector((state: RootState) => state.user.currentUser);
  const { isShown, toggle } = useModal();
  const { toast } = useToast();
  const history = useHistory();

  const handleMovePage = () => {
    history.push('/login');
  };

  const onClickPayment = () => {
    if (user === null) {
      toggle();
      return;
    }

    const { IMP } = window;
    IMP.init('imp33944797');

    const handleCallback = (rsp: any) => {
      if (rsp.success) {
        toast('결제 성공', 'bottom-center', 1200, 300);
        let msg = '결제가 완료되었습니다.';
        msg += `고유ID : ${rsp.imp_uid}`;
        msg += `상점 거래ID : ${rsp.merchant_uid}`;
        msg += `결제 금액 : ${rsp.paid_amount}`;
        msg += `카드 승인번호 : ${rsp.apply_num}`;
      } else {
        toast(`결제 실패: ${rsp.error_msg}.`, 'bottom-center', 1200, 500);
      }
    };

    const data = {
      pg: 'html5_inicis', // PG사
      pay_method: 'card', // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: total, // 결제금액
      name: '주문명: 고피자 결제 테스트', // 주문명
      buyer_name: `${user.email}님`, // 구매자 이름
      buyer_tel: '01012341234', // 구매자 전화번호
      buyer_email: `${user.email}`, // 구매자 이메일
      buyer_addr: '신사동 661-16', // 구매자 주소
      buyer_postcode: '06018', // 구매자 우편번호
    };

    IMP.request_pay(data, handleCallback);
  };

  return (
    <>
      <PaymentBtn onClick={onClickPayment}>{`${total.toLocaleString('ko-KR')}원 결제`}</PaymentBtn>
      <Modal
        isShown={isShown}
        hide={toggle}
        contentText="로그인 해주세요!"
        buttonText="로그인"
        onClick={handleMovePage}
      />
    </>
  );
};

export default PaymentButton;
