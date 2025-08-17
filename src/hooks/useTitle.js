import { useEffect } from 'react'

export const useTitle = (title) => {

    useEffect(() => {

        document.title = `${title}- EBookCom`;

    }, [title])

    return null;
}
