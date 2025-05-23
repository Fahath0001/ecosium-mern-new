import React from 'react';

const FormatDate = ({ dateString }) => {
    const [day, month, year] = dateString.split('/');

    const date = new Date(year, month - 1, day);

    const dayNum = date.getDate();
    const dayName = date.toLocaleString('default', { weekday: 'short' });
    const monthName = date.toLocaleString('default', { month: 'short' });
    const yearNum = date.getFullYear();

    const getOrdinal = (n) => {
        if (n > 3 && n < 21) return 'th';
        switch (n % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    const ordinal = getOrdinal(dayNum);

    return (
        <>
            {dayName}, {dayNum}
            <sup>{ordinal}</sup> {monthName}, {yearNum}
        </>
    );
};

export default FormatDate;
