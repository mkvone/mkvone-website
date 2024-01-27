'use client';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import { Pacifico } from 'next/font/google';
import React, { useState, useEffect } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

interface StyledProps {
    $sticky: boolean;
}
const St = {
    Nav: styled.nav<StyledProps>`
        display: flex;
        align-items: center;
        justify-content: start;

        font-size: ${({ theme }) => theme.fontSize.xlg};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        transition: 0.5s;
        z-index: 1000;
        ${({ $sticky, theme }) =>
            $sticky
                ? css`
                      position: sticky;
                      top: 0px;
                      color: white;
                      background-color: #363535;
                      opacity: 0.8;
                  `
                : css`
                      color: white;
                      background-color: #363535;
                      color: #363535;
                      background-color: white;
                  `}
    `,
    Logo: styled(Image)`
        /* margin-right: 10px; */
    `,
    BrandName: styled.h1<StyledProps>`
        font-family: 'Pacifico', cursive;
        font-size: ${({ theme }) => theme.fontSize.xxxxxxl};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
    `,
    Brand: styled.div`
        padding-left: 10px;
        display: flex;
        align-items: center;
        justify-content: start;
    `,
};

export function Logo() {
    return <Image src="/mkv_logo.png" alt="Metta Karuna Validator" width={75} height={75} />;
}
export default function Header() {
    const [sticky, setSticky] = useState(false);

    useScrollPosition(
        ({ prevPos, currPos }) => {
            const isShow = currPos.y < -1;
            if (isShow !== sticky) setSticky(isShow);
        },
        [sticky]
    );

    return (
        <>
            <St.Nav $sticky={sticky}>
                <St.Brand>
                    {' '}
                    <Logo />
                    <St.BrandName $sticky={sticky}>Metta Karuna Validator</St.BrandName>{' '}
                </St.Brand>
            </St.Nav>
        </>
    );
}
