import Image from './image';
import Text from './text';

export default function Main(){
    return(
        <>
            <section className="mt-3">
                <div className="row">
                    <div className="col-12 col-md-12">
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <Image/>
                                <Text/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}