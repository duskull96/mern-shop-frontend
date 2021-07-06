import React, { useEffect } from 'react';
import style from './Main.module.scss'
// const Block = lazy(() => import('./components/Block/Block'))
import Block from './components/Block/Block'

const Main = (props) => {
    console.log(props.main, 'Main - props');
    console.log('render');
    useEffect(() => {
        props.getMain()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={style.wrapper}>
            <div className={style.main}>
                {
                    props.main.map((block) => {
                        return <Block block={block} />
                        
                    })
                }
            </div>
        </div>
    )
}

export default Main;