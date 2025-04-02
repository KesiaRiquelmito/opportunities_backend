CREATE TABLE "Opportunities" (
    id SERIAL PRIMARY KEY,
    code VARCHAR(50) NOT NULL,
    title TEXT NOT NULL,
    type VARCHAR(50) NOT NULL,
    is_followed BOOLEAN NOT NULL,
    publish_date TIMESTAMP NOT NULL,
    close_date TIMESTAMP NOT NULL
);

INSERT INTO "Opportunities" (code, title, type, is_followed, publish_date, close_date)
VALUES ('L1-01-25', 'Adquisición de computadores', 'tender', TRUE, '2025-03-20 08:00:00', '2025-03-25 08:00:00'),
       ('L1-02-25', 'Desarrollo de software empresarial', 'agile', FALSE, '2025-03-25 09:00:00', '2025-04-15 09:00:00'),
       ('L1-03-25', 'Suministro de mobiliario de oficina', 'tender', TRUE, '2025-02-18 10:00:00', '2025-03-11 10:00:00'),
       ('L1-04-25', 'Implementación de red de fibra óptica', 'agile', FALSE, '2025-03-28 11:00:00', '2025-04-11 11:00:00'),
       ('L1-05-25', 'Mantenimiento de equipos industriales', 'tender', TRUE, '2025-02-01 12:00:00', '2025-03-10 12:00:00'),
       ('L1-06-25', 'Construcción de edificio corporativo', 'tender', FALSE, '2025-01-16 13:00:00', '2025-01-20 13:00:00'),
       ('L1-07-25', 'Adquisición de servidores y almacenamiento', 'agile', TRUE, '2025-03-28 14:00:00', '2025-04-11 14:00:00'),
       ('L1-08-25', 'Consultoría en transformación digital', 'tender', FALSE, '2025-03-28 15:00:00', '2025-04-11 15:00:00'),
       ('L1-09-25', 'Servicios de ciberseguridad', 'agile', TRUE, '2025-03-28 16:00:00', '2025-04-11 16:00:00'),
       ('L1-10-25', 'Implementación de ERP empresarial', 'tender', FALSE, '2025-03-28 17:00:00', '2025-04-11 17:00:00'),
       ('L1-11-25', 'Renovación de licencias de software', 'agile', TRUE, '2025-01-20 18:00:00', '2025-01-22 18:00:00'),
       ('L1-12-25', 'Construcción de parque fotovoltaico', 'tender', FALSE, '2025-03-28 19:00:00', '2025-04-11 19:00:00'),
       ('L1-13-25', 'Servicios de mantenimiento de redes', 'agile', TRUE, '2025-03-20 20:00:00', '2025-04-17 20:00:00'),
       ('L1-14-25', 'Compra de vehículos corporativos', 'tender', FALSE, '2025-02-25 21:00:00', '2025-04-21 21:00:00'),
       ('L1-15-25', 'Adquisición de equipos de impresión', 'agile', TRUE, '2025-03-03 22:00:00', '2025-03-15 22:00:00'),
       ('L1-16-25', 'Implementación de sistemas de videovigilancia', 'tender', FALSE, '2025-03-28 23:00:00', '2025-04-11 23:00:00'),
       ('L1-17-25', 'Modernización de infraestructura eléctrica', 'agile', TRUE, '2025-03-28 07:30:00', '2025-04-11 07:30:00'),
       ('L1-18-25', 'Servicios de consultoría financiera', 'tender', FALSE, '2025-03-28 08:30:00', '2025-04-11 08:30:00'),
       ('L1-19-25', 'Desarrollo de plataforma de e-learning', 'agile', TRUE, '2025-03-07 09:30:00', '2025-03-14 09:30:00'),
       ('L1-20-25', 'Mantenimiento de flota de transporte', 'tender', FALSE, '2025-02-18 10:30:00', '2025-04-25 10:30:00');