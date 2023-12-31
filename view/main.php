<?php
/** */
?>

<main class="p-3">
    <section class="d-flex justify-content-center p-5">

        <div class="d-flex justify-content-center align-items-center flex-column w-75 p-3 card h-100 border border-primary mt-3">
        
            <table class="w-50">

                <tr>
                    <td id="table_date_1" class=" border border-4 border-success text-center p-4"></td>
                    <td id="table_date_2" class=" border border-4 border-success text-center p-4"></td>
                    <td id="table_date_3" class=" border border-4 border-success text-center p-4"></td>
                </tr>
                <tr>
                    <td id="table_date_4" class="border border-4 border-success text-center p-4"></td>
                    <td id="table_date_5" class="border border-4 border-success text-center p-4"></td>
                    <td id="table_date_6" class="border border-4 border-success text-center p-4"></td>
                </tr>
                <tr>
                    <td id="table_date_7" class="border border-4 border-success text-center p-4"></td>
                    <td id="table_date_8" class="border border-4 border-success text-center p-4"></td>
                    <td id="table_date_9" class="border border-4 border-success text-center p-4"></td>
                </tr>

            </table>
                <script src="controller/capturaClickEnTabla.js"></script>
                <script src="controller/capturarJugador.js"></script>
            <?php
                
            ?>

            <div class="d-flex justify-content-evenly my-4 w-100">
                <div id="player1" class="w-25 border border-primary p-3 text-center bg-success bg-gradient text-white">
                    <div class="players">

                    </div>
                </div>
                <div id="player2" class="w-25 border border-primary p-3 text-center bg-success bg-gradient text-white">
                    <div class="players">
                        
                    </div>
                </div>
            </div>

        </div>
    </section>
</main>