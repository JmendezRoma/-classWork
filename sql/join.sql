USE  championship;

SELECT 
    pj.id_participacion,
    e.nombre AS equipo_nombre,
    j.nombre AS jugador_nombre,
    j.apellidos AS jugador_apellidos,
    p.id_partido,
    p.arbitro AS arbitro_partido,
    p.campo AS campo_partido,
    p.resultado AS resultado_partido,
    pj.createdAt,
    pj.modifiedAt
FROM 
    PartidosJugados pj
JOIN 
    Equipos e ON pj.id_equipo = e.id_equipo
JOIN 
    Jugadores j ON pj.id_jugador = j.id_jugador
JOIN 
    Partidos p ON pj.id_partido = p.id_partido;
