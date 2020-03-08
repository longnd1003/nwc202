
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <title>NWC Asking Service</title>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://kit.fontawesome.com/9b81e7de6f.js" crossorigin="anonymous"></script>
    <script src="js/messenger.js"></script>
</head>

<body>
    <div class="container py-5 px-4">
        <header class="text-center my-5">
            <h1 class="display-3 text-white">NWC Asking Service</h1>
        </header>
        <div class="rounded-lg overflow-hidden shadow text-center">
            <div class="container px-5 py-5">
                <h2 class="display-4 text-white pb-3">Firstly, please choose the voice that you prefer:</h2>
                <form id="form" action="chatbot.php" method="get">
                    <select name="voice" class="custom-select custom-select-lg mb-3">
                        <option value="banmai">Ban Mai (Northern Female)</option>
                        <option value="leminh">Le Minh (Northern Male)</option>
                        <option value="myan">My An (Central Female)</option>
                        <option value="lannhi">Lan Nhi (Southern Female)</option>
                        <option value="female">Thu Dung (Northern Female)</option>
                        <option value="male">Cao Chung (Northern Male)</option>
                        <option value="hatieumai">Ha Tieu Mai (Southern Female)</option>
                    </select>
                    <button class="btn btn-light mt-3 py-3" type="submit"><i class="fas fa-arrow-right"></i></button>
                </form>
            </div>
        </div>
    </div>
</body>