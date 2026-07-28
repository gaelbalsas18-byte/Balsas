interface Props{

    title:string;

    text:string;

}

export default function ChatBubble({

    title,

    text,

}:Props){

    return(

        <div className="mb-5 max-w-[260px] rounded-3xl bg-white p-5 shadow-xl">

            <h3 className="mb-2 font-bold text-blue-700">
                {title}
            </h3>

            <p className="text-sm leading-6 text-gray-600">
                {text}
            </p>
             {/* Barra de progreso */}
            <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-slate-200">
                <div className="progress-bar h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
            </div>
        </div>

    )

}