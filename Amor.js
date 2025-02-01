<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Te Amo</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #ffebee;
            overflow: hidden;
            font-family: 'Arial', sans-serif;
        }

        .contenedor {
            text-align: center;
            position: relative;
            z-index: 1;
        }

        .mensaje {
            font-size: 3rem;
            color: #d32f2f;
            animation: latido 1.5s infinite;
        }

        @keyframes latido {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
        }

        .corazon {
            position: absolute;
            top: -10%;
            font-size: 2rem;
            color: #d32f2f;
            animation: flotar 5s linear infinite;
        }

        @keyframes flotar {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    </style>
</head>
<body>
    <div class="contenedor">
        <div class="mensaje">Te amo, mi amor hermoso ❤️</div>
    </div>

    <!-- Generar corazones -->
    <script>
        function crearCorazon() {
            const corazon = document.createElement('div');
            corazon.classList.add('corazon');
            corazon.innerHTML = '❤️';
            corazon.style.left = Math.random() * 100 + 'vw';
            corazon.style.animationDuration = Math.random() * 3 + 2 + 's';
            document.body.appendChild(corazon);

            setTimeout(() => {
                corazon.remove();
            }, 5000);
        }

        setInterval(crearCorazon, 300);
    </script>
</body>
</html>

