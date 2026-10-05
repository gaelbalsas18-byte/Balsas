"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

/* =========================
   DATA
========================= */

const INFO_ESTADOS = {

  BajaCalifornia: {
    nombre: "Baja California",
    imagen: "/Estados/BJC.png",
    distribuidores: [
      "JESUS RODRIGUEZ RIOS av. mariano arista 1368 tel: 686 526 8885",
      "UGALDENT carmen rivera #52 maestros estatales, mexicali tel: 686 543 4422",
      "DEPOSITO DENTAL OBREGON mexicali calz anáhuac 1162, jardines del lago, 21330 mexicali, B.C. tel:  686 170 6689",
      "DENTAL INK calzada del tecnológico #14911, tijuana, mexico tel:  664 973 1096",
      "SIGLO 21 GOMEZ FARIAS av. sirak baloyan 1901, zona centro, 22000 tijuana, B.C. tel:  664 290 0265"
    ],
  },

    BajaCaliforniaSur:{
    nombre: "Baja California Sur",
    imagen: "/Estados/BJCS.png",
    distribuidores: [
    "DISTRIBUIDORA DENTAL DEL PACIFICO caribe # mza 2 lte 313 cabo san lucas tel: 624 157 3661",
    ],
  },

    sonora: {
    nombre: "Sonora",
    imagen: "/Estados/Sonora.png",
    distribuidores: [
      "DENTAL MORELOS calle: isidro olvera 17 colonia: constitucion 83150 ciudad: sonora tel: 662 430 1329",
      "DEPOSITO DENTAL RIVERA calle: av. puebla 67 colonia: hermosillo centro 83000 ciudad: sonora tel: 662 138 5514",
      "MOVI DENTAL DEPOT calle campillo # 186 local 124. nogales sonora 84030. méxico. tel: (631) 312 1435"
    ],
  },

  Chihuahua: {
    nombre: "Chihuahua",
    imagen: "/Estados/Chihua.jpg",
    distribuidores: [
      "DENTALID misioneros 2719 av. universidad chihuahua tel: 614 281 8546",
      "SANTO NIÑO calle 27 gomez morin 1318 colonia santo niño chihuhua - mex tel: 614 1892217",
      "ALTAVISTA calle: 29A 2305 colonia: altavista 31200 ciudad: chihuahua tel: 614 1268480",
      "LEOS MANILA 4871 progresista, ciudad juarez, chihuahua tel: 656 626 0670",
      "UNIDOS calle: ing. manuel cardona 523 colonia: zona centro oriente 32000 tel: 636 144 0352"
    ],
  },

     Guerrero:{
    nombre: "Guerrero",
    imagen: "/Estados/Guerrero.jpg",
    distribuidores: [
    "DISTRIBUIDORA DENTAL DEL SUR terminal de autobuses estrella de oro av. cuauhtemoc 1490 fraccionamiento magallanes, acapulco, 39670 tel: 7444477902",
    "ACADENT URDANETA andres urdaneta 10-205, hornos, acapulco 39355 tel: 7444864984",
    "ACADENT ZOCALO jesus carranza 2, centro, acapulco 39672 tel: 7444836651"
    ],
  },

     CiudaddeMéxico:{
    nombre: "Ciudad de México",
    imagen: "/Estados/CDMX.png",
    distribuidores: [
    "XOLA calz. de tlalpan 662, moderna, benito juárez, 03510 ciudad de méxico, cdmx tel: 525556961026",
    "DEPOSITO TUTTI DENTAL odontologia 75 y 80b, copilco, coyoacan 04360 tel: 5556589372",
    "ARTICULOS DENTALES PORTALES albert 13, benito juarez 03560 tel: 5556720200",
    "ORLANDO PINEDA MEJIA sur 73 4411 tel: 5532283237",
    "YAEL ARIADNA NAVARRO HERNANDEZ plomo 282 tel: 5512949321",
    "DISTRIBUIDORA DENTAL SIGLO 21 santiago 2505 tel: 5536743496",
    "DEPOSITO DENTAL LUDY batallon de zacapoaxtla 8-A tel: 5557446067",
    "DEPOSITO DENTALMEX calle: Manta 672 Loc. F  colonia: Lindavista Sur 07300  ciudad: cdmx tel: 5588589260"
    ],
  },

     Mexico:{
    nombre: "Estado De Mexico",
    imagen: "/Estados/EDOMEX.png",
    distribuidores: [
    "DEPOSITO DENTAL ARGENTINO ignacio allende, gral. francisco villa 209, universidad, 50130 toluca de lerdo, méx. tel:  722 280 7676",
    "DEPODENT  andador austria esq dinamarca mzC 54B, local 3, 54700 cuautitlán izcalli, Méx. TEL: 55 1936 3848",
    "DEPOSITO DENTAL DEL VALLE junto walmart express, blvd a queretaro 13, habit.viveros del valle, hab viveros del valle, 54060 tlalnepantla, méx. tel:  55 3449 6696",
    "DEPOSITO DENTAL BOSQUES plaza san judas, andador austria esq dinamarca, mzC 54B, lote 43 local 4 PB, 54700 cuautitlán izcalli, méx. tel: 55 5871 7126",
    ],
  },

  Coahuila: {
    nombre: "Coahuila",
    imagen: "/Estados/COAHUILA.png",
    distribuidores: [
    ],
  },

   Tamaulipas: {
    nombre: "Tamaulipas",
    imagen: "/Estados/TAMAULIPAS.png",
    distribuidores: [
      "STANFORD DISTRIBUIDORA DENTAL anaya 1325, residencial las palmas, 87050 cdad. victoria, tamps. tel:  834 316 7900",
    ],
  },

  NuevoLeaon:{
    nombre: "Nuevo Leon",
    imagen: "/Estados/NUEVO.png",
    distribuidores: [
    "ODONTOLOGY BUSINESS GROUP av. cristina larralde de treviño tel: 811 9658708",
    "JOSE PABLO GAMEZ MARTINEZ loma blanca 2900 a tel: 811 2620537",
    "EQUIPOS DENTALES VILLA DE CORTES eduardo aguirre pequeño 1302 tel: 55 19657796",
    "PAULA MELISSA BUZO GONZALEZ av. lazaro cardenas 4000 l 27 28 tel: 812 0970685",
    "JESUS ROGELIO ARMENTA VALDEZ dr.eduardo aguirre pequeño 905 tel: 01 811 2981287",
    "VERONICA BUZO AGUNDIZ dr.eduardo aguirre pequeño 1503 tel: 01 818 3479500"
    ],
  },
  QuintanaRoo:{
    nombre: "QuintanaRoo",
    imagen: "/Estados/QUINTA.png",
    distribuidores: [
    "VITALDENTAL avenida palenque con esquina calle camarón mz4 lote 1 local 2, col. smz27, C.P. 77509 tel: 9984034850",
    "DEPOSITO DENTAL EXPRESS av. chichen itza mza 7 #lote 13 int:, supermanzana 27 int. a, 77509 q.r. tel: 998 884 9101",
    "GC DEPOSITO DENTAL av. erick paolo martinez entre av. del magisterio y calle tec. de monterrey local 2 colonia 17 de octubre cp. 77086 tel: 983 836 5814"
    ],
  },

    Campeche:{
    nombre: "Campeche",
    imagen: "/Estados/CAMPECHE.png",
    distribuidores: [
    "PROVEEDORA MEDICO DENTAL COLONIAL CAMPECHE  xcaret mza.12 lte.23, amp kalá i, 24087 san francisco de campeche, camp. tel: 981 817 1432",
    ],
  },

    Tabasco:{
    nombre: "Tabasco",
    imagen: "/Estados/TABASCO.png",
    distribuidores: [
    "PROMADENT andrés sánchez magallenes # 903 tel: 9933122954",
    ],
  },

    Chiapas:{
    nombre: "Chiapas",
    imagen: "/Estados/CHIAPAS.png",
    distribuidores: [
    "DEPOSITO DENTAL CENTAURO décima poniente sur 420 - a, las canoitas, tuxtla gutiérrez, chiapas, 29066 tel: 961 6124238",
    ],
  },

    Colima:{
    nombre: "Colima",
    imagen: "/Estados/COLIMA.png",
    distribuidores: [
    ],
  },

    Nayarit:{
    nombre: "Nayarit",
    imagen: "/Estados/NAYARIT.png",
    distribuidores: [
    ],
  },

    Sinaloa:{
    nombre: "Sinaloa",
    imagen: "/Estados/SINALOA.png",
    distribuidores: [
    "YOLANDA GUADALUPE CASTRO flores de los constituyentes 1406-C tel: 6677915579",
    "MARIA DEL ROSARIO BURGOS MUÑOZ trinidad lopez pte 552 tel: 6683208118",
    "JACOBO EFRAIN PEREZ INZUNZA rafael buelna 800 tel: 01 6681380343",
    "LAURA ELENA ORRANTE LIZARRAGA ose aguirre benavidez 210 tel: 01 6699303007",
    "DEPOSITO DENTAL OBREGON av. alvarado obregon norte 1834 tel: 01 6674553332"
    ],
  },

    Yucatan:{
    nombre: "Yucatan",
    imagen: "/Estados/YUCATAN.png",
    distribuidores: [
    "DENTEC merida-matriz: 9992165727 suc. norte tel: 999 640 7691.",
    "MERIDENTAL merida-matriz: 9994102180 suc. norte tel: 999 641 4411",
    "ZENITH merida-matriz tel: 999 688 39 01",
    "ERNESTO ENRIQUE NAVAS RAMIREZ 25 diagonal 584 tel: 01 999 316 5658",
    "PROMADENT calle 59 no. 544 col. centro mérida, yucatán, 97000 tel: 9999242587"
    ],
  },

    Verecruz:{
    nombre: "Verecruz",
    imagen: "/Estados/VERA.png",
    distribuidores: [
    "DEPOSITO DENTAL SALEM sur 33 700 tel: 272 1024066",
    "DEPOSITO DENTAL LUIGIDENT calle 7 1109 casa 1 tel: 272 1322615"
    ],
  },

    Jalisco:{
    nombre: "Jalisco",
    imagen: "/Estados/jalisco.png",
    distribuidores: [
    "OMEGA DENTAL calle siete colinas 1487, colonia independencia, C.P. 44290, guadalajara tel: 3331151278",
    "COPIDENT calle slavador quevedo y zubieta 220, colonia la perla C.P 44360, guadalajara tel: 3324418557",
    "COPIDENTAL avenida de las américas 122, colonia americana, C.P 44160, guadalajara tel: 3335760125",
    "BODEGA DENTAL DEL SOL calle pedro moreno 1585, colonia americana, C.P 44160, guadalajara tel: 3322578321",
    "D.D FONG av. cvln. división del nte. 747, jardines alcalde, 44270 guadalajara tel: 3313582556",
    "CONSTRUDENT av. cruz del sur 4819, las aguilas, 45080 zapopan, jal. tel: 3313054761",
    "DENTAL UNIVERSIDAD C. escorza 559, col americana, americana, 44160 guadalajara, jal. tel: 3328338925",
    "EMANUEL HERNÁN PARTIDA ISLAS av guadalupe 2574, col arenales tapatios, c.p 45066 tel: 3312490017",
    "JOSÉ DE JESÚS PELAYO MARTÍNEZ salvador quevedo y zubieta 240, la perla, 44360 guadalajara, jal. tel: 3319929514",
    "ALAM ESSAU MATA CHÁVEZ c. hidalgo 807, col lázaro cárdenas, c.p 49014, zapotlán el grande tel: 3411123101",
    "FABIOLA MARTÍNEZ CASTILLO c. zacatecas 291, centro, 63000 tepic, nay. tel: 3111362542"
    ],
  },

    Michoacan:{
    nombre: "Michoacan",
    imagen: "/Estados/MICHOA.png",
    distribuidores: [
    "ALODENT adolfo cano 170 morelia tel: 4433566786",
    "GILBERTO GUADALUPE URIBE AYALA av. acueducto 2800 lomas de hidalgo 58240 morelia tel: 4431359597"
    ],
  },

    Oaxaca:{
    nombre: "Oaxaca",
    imagen: "/Estados/OAXACA.png",
    distribuidores: [
    "LIZANDRO ABISAID ANGELES PACHECO av. universidad 516 tel: 9511099270",
    "SALVADOR CRUZ ESCAMILLA francisco villa 110 tel: 01 951 516 7753",
    "CLAUDIA ELIZABETH SOTO LOPEZ huerto los framboyanes 215 manzana m, lote 2 tel: 01 951 5144610",
    "JACQUELINE HERNANDEZ REYES huerto framboyanes 302 tel: 01 951 5142301",
    ],
  },

    Puebla:{
    nombre: "Puebla",
    imagen: "/Estados/PUEBLA.png",
    distribuidores: [
    "NALLELI DIAZ DURAN privada 38 norte no. 1606 tel: 2225340509",
    "PRODUCTOS DENTALES MARK INC calle 13 sur 3103 tel: 222 2111821"
    ],
  },

    Morelos:{
    nombre: "Morelos",
    imagen: "/Estados/MORE.png",
    distribuidores: [
    "DEPOSITO DENTAL PLAN DE AYALA av. plan de ayala 601, vicente guerrero, cuernavaca 62430 tel: 7774930115",
    ],
  },

     Querétaro:{
    nombre: "Querétaro",
    imagen: "/Estados/QUERE.jpg",
    distribuidores: [
    ],
  },

     Hidalgo:{
    nombre: "Hidalgo",
    imagen: "/Estados/HIDALGO.png",
    distribuidores: [
    "SIMAO paseo del estudiante, 2da P 100, pri chacón, 42186 hgo. tel: 5512572274",
    ],
  },

     Guanajuato:{
    nombre: "Guanajuato",
    imagen: "/Estados/GUANA.png",
    distribuidores: [
    "DEPOSITO DENTAL GARDENT LEON maestros 239A, panorama, leon 37160 tel: 4777172007",
    "DEPOSITO DENTAL GARDENT IRAPUATO atilano nieto 592, tabachines, irapuato 36611 tel: 4626242079",
    "DEPOSITO AGRAMONT aguilar y  maya 102, alameda, celaya 38050 tel: 4616162139",
    "DEPOSITO DENTAL STANFORD guatemala 463B tabachines, irapuato 36615 tel: 4622156335",
    "DEPOSITO DENTAL MERIDA pipila 120a centro, moroleon 38800 tel: 4451369054",
    "CELESTE DEPOSITO DENTAL guatemala 403, tabachines, irapuato 36615 tel: 4626247505",
    "LAURA GARCIA CALDERON revolucion 324 a tel: 461 6080097",
    "PABLO CASAS BARCENAS walter buchanan tel: 468 6881611",
    "DDL DENTAL leon dr. pablo del rio 102-a tel: 01 4777187081"
    ],
  },

     SanLuisPotosí:{
    nombre: "San Luis Potosí",
    imagen: "/Estados/SAN.png",
    distribuidores: [
    "DDU fray josé de arlegui 795, virreyes, 78240 san luis potosí, s.l.p. tel: 4448293141",
    "QM  av. himno nacional 925, las aguilas 3ra secc, 78270 san luis potosí, s.l.p. tel: 4444119759"
    ],
  },

     Zacatecas:{
    nombre: "Zacatecas",
    imagen: "/Estados/ZACATE.jpg",
    distribuidores: [
    "DDG garcía velez begonias 48-a, centro, 98600 guadalupe, zac. tel: 4921246467",
    "DEPÓSITO DENTAL UNIÓN c. 21 de marzo 15-B norte, centro, 99000 fresnillo, zac. tel: 4939371554"
    ],
  },

     Aguascalientes:{
    nombre: "Aguascalientes",
    imagen: "/Estados/AGUAS.png",
    distribuidores: [
    "STANFORD sierra fría 121, bosques del prado nte., 20127 aguascalientes, ags. tel: 4494585540",
    "SANTA FE av. universidad 1103, bosques del prado nte., 20120 aguascalientes, ags. tel: 4491559856",
    "MAXIDENT enrique olivares santana 230 facc boulevares 1era sección tel: 4499113714"
    ],
  },

     Durango:{
    nombre: "Durango",
    imagen: "/Estados/DURA.png",
    distribuidores: [
    ],
  },

    Tlaxcala:{
    nombre: "Tlaxcala",
    imagen: "/Estados/TLAX.png",
    distribuidores: [
    ],
  },

} as const

type EstadoID = keyof typeof INFO_ESTADOS

/* =========================
   COMPONENTE
========================= */

export default function Distribucion() {
  const [estadoActivo, setEstadoActivo] = useState<EstadoID | "">("");

  const info = estadoActivo
    ? INFO_ESTADOS[estadoActivo]
    : null;

return (
  <section
    id="distribuidores"
    className="relative overflow-hidden bg-white px-5 sm:px-8 lg:px-12"
  >
    {/* DECORACIÓN DE FONDO */}
    <div className="relative bg-white mx-auto max-w-[1250px]">

      {/* =========================
          CONTENIDO
      ========================= */}
      <div className="grid gap-6 lg:grid-cols-[380px_1fr]">


        {/* =========================
            PANEL IZQUIERDO
        ========================= */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="
            relative
            h-[620px]
            overflow-hidden
            rounded-[28px]
            bg-gradient-to-br
            from-[#244adf]
            via-[#1d43c5]
            to-[#102b8f]
            sm:p-9
          "
        >

          {/* Círculos decorativos */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full border border-white" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-white" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-white/5 blur-2xl" />


          <div className="relative flex h-full flex-col">

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
              Cobertura nacional
            </p>

            <h3 className="mt-3 text-3xl font-bold leading-tight text-white">
              Distribución
              <br />
              dental en México
            </h3>

            <p className="mt-4 text-sm leading-6 text-white/70">
              Selecciona un estado para conocer los distribuidores
              disponibles en esa región.
            </p>


            {/* ESTADÍSTICA */}
            <div className="mt-8 flex items-end gap-3">
              <span className="text-5xl font-bold text-white">
                {Object.keys(INFO_ESTADOS).length}
              </span>

              <span className="mb-1 text-sm leading-5 text-white/60">
                estados
                <br />
                registrados
              </span>
            </div>

            {/* LOGO DEL ESTADO */}
            {info && "imagen" in info && info.imagen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="mt-5 flex justify-center"
              >
                <div className="relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-[24px] bg-white shadow-lg">
                  <Image
                    src={info.imagen}
                    alt={`Logo de ${info.nombre}`}
                    fill
                    sizes="160px"
                    className="object-contain p-4"
                  />
                </div>
              </motion.div>
            )}

            {/* SELECTOR */}
            <div className="mt-auto pt-10">

              <label className="mb-2 block text-xs font-medium text-white/70">
                Selecciona un estado
              </label>

              <div className="relative">

                <select
                  value={estadoActivo}
                  onChange={(e) =>
                    setEstadoActivo(e.target.value as EstadoID)
                  }
                  className="
                    w-full
                    appearance-none
                    rounded-xl
                    border
                    border-white/15
                    bg-white
                    px-4
                    py-3.5
                    pr-10
                    text-sm
                    font-medium
                    text-gray-800
                    shadow-lg
                    outline-none
                    transition
                    focus:ring-4
                    focus:ring-white/20
                  "
                >
                  <option value="">
                    Selecciona un estado
                  </option>

                  {Object.entries(INFO_ESTADOS).map(([id, estado]) => (
                    <option key={id} value={id}>
                      {estado.nombre}
                    </option>
                  ))}
                </select>

                <svg
                  className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>

              </div>
            </div>

          </div>
        </motion.div>


        {/* =========================
            PANEL DERECHO
        ========================= */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="
            min-h-[520px]
            rounded-[28px]
            border
            border-[#e8edf5]
            bg-white
            p-6
            shadow-[0_15px_45px_rgba(0,0,0,0.05)]
            sm:p-8
          "
        >

          <AnimatePresence mode="wait">

            {info ? (

              <motion.div
                key={estadoActivo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >

                {/* HEADER DEL ESTADO */}
                <div className="mb-7 flex items-center justify-between gap-4">

                  <div>

                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#244adf]/60">
                      Distribuidores
                    </p>

                    <h3 className="mt-1 text-3xl font-bold tracking-tight text-gray-900">
                      {info.nombre}
                    </h3>

                  </div>

                  {/* CONTADOR */}
                  <div className="flex h-12 min-w-12 items-center justify-center rounded-full bg-[#244adf]/10 px-3 text-sm font-bold text-[#244adf]">
                    {info.distribuidores.length}
                  </div>

                </div>


                {/* LINEA */}
                <div className="mb-6 h-px w-full bg-gray-100" />


                {/* DISTRIBUIDORES */}
                {info.distribuidores.length > 0 ? (

                  <div className="space-y-3">

                    {info.distribuidores.map((dist, index) => (

                      <motion.div
                        key={`${estadoActivo}-${index}`}
                        initial={{
                          opacity: 0,
                          x: 25,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.07,
                        }}
                        whileHover={{
                          x: 5,
                          scale: 1.01,
                        }}
                        className="
                          group
                          relative
                          overflow-hidden
                          rounded-2xl
                          border
                          border-[#edf0f5]
                          bg-white
                          px-5
                          py-4
                          shadow-[0_3px_15px_rgba(0,0,0,0.035)]
                          transition-shadow
                          hover:shadow-[0_8px_25px_rgba(36,74,223,0.10)]
                        "
                      >

                        {/* Barra lateral */}
                        <div className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 rounded-r-full bg-[#244adf] transition-transform duration-300 group-hover:scale-y-100" />

                        <div className="flex gap-4">

                          {/* NÚMERO */}
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#244adf]/8 text-xs font-bold text-[#244adf]">
                            {String(index + 1).padStart(2, "0")}
                          </div>

                          {/* INFO */}
                          <div className="min-w-0 flex-1">

                            <p className="text-sm font-medium leading-6 text-gray-800">
                              {dist}
                            </p>

                          </div>

                        </div>

                      </motion.div>

                    ))}

                  </div>

                ) : (

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="
                      flex
                      min-h-[280px]
                      flex-col
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-dashed
                      border-gray-200
                      bg-gray-50/70
                      text-center
                    "
                  >

                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#244adf]/10">

                      <svg
                        className="h-6 w-6 text-[#244adf]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.7}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.5m0 3h.01M10.3 3.8L2.8 17a2 2 0 001.74 3h14.92a2 2 0 001.74-3L13.7 3.8a2 2 0 00-3.4 0z"
                        />
                      </svg>

                    </div>

                    <p className="font-semibold text-gray-800">
                      Sin distribuidores registrados
                    </p>

                    <p className="mt-1 max-w-xs text-sm text-gray-500">
                      Actualmente no contamos con distribuidores
                      registrados para este estado.
                    </p>

                  </motion.div>

                )}

              </motion.div>

            ) : (

              /* =========================
                 ESTADO INICIAL
              ========================= */

              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex min-h-[470px] flex-col items-center justify-center text-center"
              >

                {/* ICONO ANIMADO */}
                <div className="relative mb-7">

                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full bg-[#244adf]/10"
                  />

                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#244adf]/10">

                    <svg
                      className="h-10 w-10 text-[#244adf]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"
                      />

                      <circle
                        cx="12"
                        cy="11"
                        r="2.5"
                      />
                    </svg>

                  </div>

                </div>

                <h3 className="mt-3 text-2xl font-bold text-gray-900">
                  Encuentra un distribuidor
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
                  Selecciona un estado en el menú para consultar
                  los distribuidores disponibles en esa región.
                </p>

              </motion.div>

            )}

          </AnimatePresence>

        </motion.div>

      </div>

    </div>
  </section>
)
}