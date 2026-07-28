"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { estados } from "../data/Estados";
import FadeIn from "../animations/FadeIn";

export default function Registro() {
  const [codigoValido, setCodigoValido] = useState(false);
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const [form, setForm] = useState({
    codigo: "",
    boleto: "",
    nombreCompleto: "",
    email: "",
    telefono: "",
    cedula: "",
    alergias: "",
    estado: "",
    instagram: "",
    privacidad: false,
    bases: false,
     // ===== FACTURACIÓN =====
    requerirFactura: false,
    rfc: "",
    cp: "",
    razonSocial: "",
    correoFactura: "",
    usoCfdi: "",
    telefonoFactura: "",
    regimenFiscal: "",
  });

  /* ================= VALIDAR CÓDIGO ================= */
  const validarCodigo = async () => {
    if (!form.codigo) return;

    setLoading(true);

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzX4eaVBN4T6YbEJ1q7qmpvQya980GcyaS2nNnJUDIVumkbIcDWeLOT7kKwNRSEIYdf/exec",
        {
          method: "POST",
          body: JSON.stringify({
            accion: "validarCodigo",
            codigo: form.codigo,
          }),
        }
      );
      const data = await res.json();

      if (!data.success) {
        alert(data.message || "Código inválido o ya utilizado");
        setLoading(false);
        return;
      }

      setForm((prev) => ({
        ...prev,
        boleto: data.tipo, // Conferencia o Hands On
      }));

      setCodigoValido(true);
    } catch (error) {
      alert("Error validando código");
    } finally {
      setLoading(false);
    }
  };

  
  /* ================= ENVIAR FORMULARIO ================= */
  const enviarFormulario = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzX4eaVBN4T6YbEJ1q7qmpvQya980GcyaS2nNnJUDIVumkbIcDWeLOT7kKwNRSEIYdf/exec",
        {
          method: "POST",
          body: JSON.stringify({
            accion: "guardarRegistro",
            ...form,
          }),
        }
      );

      const data = await res.json();

      if (!data.success) {
        alert(data.message || "Error al guardar");
        setLoading(false);
        return;
      }

      setEnviado(true);
    } catch (error) {
      alert("Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="registro" className="relative py-32 px-6 overflow-hidden bg-white">
      {/* Background 
      <Image
        src="/Logos/pie.png"
        alt="Registro Tokuyama Fest"
        fill
        priority
        className="object-cover object-center"
      />
      */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 gap-16 items-start">
        
        {/* COLUMNA IZQUIERDA */}
        <div className="text-white">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-blue-700  text-2xl md:text-4xl font-bold mb-7 text-center"
          >
            !Registro!
          </motion.h2>

          <FadeIn>
          <p className="text-blue-700 text-base md:text-2xl leading-relaxed opacity-90 mb-7 text-center">
            Vive una experiencia única diseñada para profesionales de la <br></br>
            odontología que buscan actualizarse, crecer y conectar con los <br></br>
            mejores especialistas del sector.
          </p>

          <p className=" text-blue-700 text-base md:text-2xl leading-relaxed opacity-90 text-center">
            Ingresa tu código de acceso para completar tu registro.
          </p>
          </FadeIn>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="max-w-xl mx-auto w-full text-center">

          {/* ====== CÓDIGO ====== */}
          {!codigoValido && (
            <div className="space-y-4">
              <input
                placeholder="Código de acceso"
                className="w-full border px-4 py-3 rounded-lg bg-white text-black text-center"
                onChange={(e) =>
                  setForm({ ...form, codigo: e.target.value.trim().toUpperCase() })
                }
              />

              <button
                onClick={validarCodigo}
                disabled={loading}
                className="w-full border border-white text-white bg-blue-700 py-3 rounded-lg uppercase tracking-wide hover:bg-white hover:text-blue-700 transition-all"
              >
                {loading ? "Validando..." : "Validar código"}
              </button>
            </div>
          )}

          {/* ====== FORMULARIO ====== */}
          {codigoValido && !enviado && (
            <form onSubmit={enviarFormulario} className="mt-10 space-y-4 text-left">
              <p className="text-white text-sm">
                Tipo de boleto: <strong>{form.boleto}</strong>
              </p>

              <input required placeholder="Nombre Completo" className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                onChange={(e) => setForm({ ...form, nombreCompleto: e.target.value })} />

              <input required type="email" placeholder="Correo" className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                onChange={(e) => setForm({ ...form, email: e.target.value })} />

              <input required placeholder="Teléfono" className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                onChange={(e) => setForm({ ...form, telefono: e.target.value })} />

              <input placeholder="Cédula Profesional (Opcional)" className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                onChange={(e) => setForm({ ...form, cedula: e.target.value })} />

              <input required placeholder="¿Alguna alergia?" className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                onChange={(e) => setForm({ ...form, alergias: e.target.value })} />

              <select
                    required
                    defaultValue=""
                    className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                    onChange={(e) => setForm({ ...form, estado: e.target.value })}
                  >
                    <option value="" disabled>
                      Selecciona tu estado
                    </option>

                    {estados.map((estado) => (
                      <option key={estado} value={estado}>
                        {estado}
                      </option>
                    ))}
                  </select>

              <input placeholder="Instagram (Opcional)" className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                onChange={(e) => setForm({ ...form, instagram: e.target.value })} />

                <label className="flex gap-2 text-sm text-black">
                <input type="checkbox" required
                  onChange={(e) => setForm({ ...form, privacidad: e.target.checked })} />
                Acepto el{""}
                <a href="https://balsasdental.com.mx/wp-content/uploads/2025/12/AV-PRIVACIDAD-USO-DE-IMAGEN-Y-C-ATOTIZACION-CLIENTES.pdf" className="underline hover:text-green-400">
                  Aviso de privacidad
                </a>
              </label>

              {/* factura */}
              {form.boleto !== "Beca" && (
                <label className="flex gap-2 text-sm text-black">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      setForm({ ...form, requerirFactura: e.target.checked })
                    }
                  />
                  ¿Requerir factura?
                </label>
              )}

              <p className="text-black text-sm font-semibold">
                La factura solamente es valida si realiza el registro dentro del mes en que se realizo su primer pago
              </p>

                {form.requerirFactura && (
                    <div className="space-y-4">
                      <input
                        required
                        placeholder="RFC"
                        className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                        onChange={(e) => setForm({ ...form, rfc: e.target.value })}
                      />

                      <input
                        required
                        placeholder="Código Postal"
                        className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                        onChange={(e) => setForm({ ...form, cp: e.target.value })}
                      />

                      <input
                        required
                        placeholder="Razón social o nombre"
                        className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                        onChange={(e) =>
                          setForm({ ...form, razonSocial: e.target.value })
                        }
                      />

                      <input
                        required
                        type="email"
                        placeholder="Correo de facturación"
                        className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                        onChange={(e) =>
                          setForm({ ...form, correoFactura: e.target.value })
                        }
                      />

                      <input
                        required
                        placeholder="Uso de CFDI"
                        className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                        onChange={(e) =>
                          setForm({ ...form, usoCfdi: e.target.value })
                        }
                      />

                      <input
                        required
                        placeholder="Teléfono de facturación"
                        className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                        onChange={(e) =>
                          setForm({ ...form, telefonoFactura: e.target.value })
                        }
                      />

                      <input
                        required
                        placeholder="Régimen Fiscal"
                        className="w-full border px-4 py-3 rounded-lg bg-white text-black"
                        onChange={(e) =>
                          setForm({ ...form, regimenFiscal: e.target.value })
                        }
                      />
                    </div>
                  )}

              {(form.boleto === "Hands On" || form.boleto === "Beca") && (
                <label className="flex gap-2 text-sm text-black">
                  <input type="checkbox" required
                    onChange={(e) => setForm({ ...form, bases: e.target.checked })} />
                  Acepto las{" "}
                  <a href="#" className="underline hover:text-green-400">
                    Bases del evento
                  </a>
                </label>
              )}
              <button
                disabled={loading}
                className="w-full bg-green-600 text-white py-3 rounded-lg"
              >
                {loading ? "Enviando..." : "Completar registro"}
              </button>
            </form>
          )}
          {enviado && (
            <div className="mt-10 text-green-400 text-xl font-semibold">
              ✅ Registro completado correctamente
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
