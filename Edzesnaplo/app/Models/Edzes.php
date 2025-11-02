<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Edzes extends Model
{
    protected $fillable = [
        'date',
        'type',
        'exercise',
        'duration',
        'notes'
    ];
}
