// ... (mismos imports)

          <Input
            name="nombre" // Agregado para Formspree
            placeholder="Nombre completo"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            required
            className="bg-card border-border h-12 font-body"
          />
          <Input
            name="email" // Agregado para Formspree
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="bg-card border-border h-12 font-body"
          />
          <Input
            name="telefono" // Agregado para Formspree
            type="tel"
            placeholder="Teléfono"
            value={form.telefono}
            onChange={(e) => setForm({ ...form, telefono: e.target.value })}
            required
            className="bg-card border-border h-12 font-body"
          />
          <Textarea
            name="mensaje" // Agregado para Formspree
            placeholder="¿Necesitás divorciarte? Escribinos tu consulta..."
            value={form.mensaje}
            onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
            rows={5}
            className="bg-card border-border font-body resize-none"
          />
