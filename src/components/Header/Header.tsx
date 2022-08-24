import React from 'react';
import './Header.scss'

interface HeaderProps{
    counttodo: number;
}

export const Header: React.FC<HeaderProps> = ({counttodo}) => (
<div className="header-container">
    <p>Лист задач</p>
    <b>{counttodo} задачи</b>
</div>
)

export default Header;